<?php

namespace App\Http\Controllers;

class SearchController extends Controller
{
    // services and methods used
    private $response = [
        'itunes'  => [
            'musics' => [],
            'movies' => []
        ],
        'tvmaze' => [
            'shows' => []
        ],
        'crcind'  => [
            'people' => []
        ]
    ];

    public function __invoke($searchText){

        $this->getItunesMusic($searchText);
        $this->getItunesMovies($searchText);
        $this->getTvShows($searchText);
        $this->getCrcindPeople($searchText);
        return $this->response;
    }

    private function executeCurl($url){
        $ch = curl_init($url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $response = curl_exec($ch);
        curl_close($ch);
        return $response;
    }

    // itunes services
    private function getItunesMusic($searchText){
        $url = 'https://itunes.apple.com/search?media=music&term='.$searchText;
        $res = json_decode($this->executeCurl($url));
        $res = $res->results;
        $this->response['itunes']['musics'] = $res;
    }
    private function getItunesMovies($searchText){
        $url = 'https://itunes.apple.com/search?media=movie&term='.$searchText;
        $res = json_decode($this->executeCurl($url));
        $res = $res->results;
        $this->response['itunes']['movies'] = $res;
    }

    // tvmaze services
    private function getTvShows($searchText){
        $url = 'http://api.tvmaze.com/search/shows?q='.$searchText;
        $this->response['tvmaze']['shows'] = json_decode($this->executeCurl($url));
    }

    // crcind services
    private function getCrcindPeople($searchText){
        $url = 'http://www.crcind.com/csp/samples/SOAP.Demo.cls?soap_method=GetListByName&name='.$searchText;
        $xmlfile = $this->executeCurl($url);

        $xml = new \SimpleXMLElement($xmlfile);
        $body = $xml->xpath('SOAP-ENV:Body')[0];

        //transform to json
        $json = json_encode((array)$body);

        //Formatting the JSON
        $json = str_replace(array("\n","\r","?"),"",$json);
        $json = preg_replace('/([{,]+)(\s*)([^"]+?)\s*:/','$1"$3":',$json);
        $Json = preg_replace('/(,)\s*}$/','}',$json);

        //Getting the array
        $array=json_decode($Json,true);
        
        if(count($array['GetListByNameResponse']) > 0){
            $this->response['crcind']['people'] = $array['GetListByNameResponse']['GetListByNameResult']['PersonIdentification'];
        }
    }
}
