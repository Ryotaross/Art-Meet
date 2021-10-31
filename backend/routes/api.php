<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
/*
Route::group(['middleware' => 'api'], function(){
    Route::get('meats', 'Api\MeatController@index');
    Route::post('meat/search', 'Api\MeatController@search');
    Route::post('meat/create','Api\MeatController@create');
    Route::post('meat/edit', 'Api\MeatController@edit');
    Route::post('meat/update','Api\MeatController@update');
    Route::post('meat/delete','Api\MeatController@delete');
    Route::post('tag/create', 'Api\TagController@create');
    Route::post('meattag/create', 'Api\MeatTagController@create');
    
});
*/

Route::group(['middleware' => 'api'], function(){
    Route::get('golfs', 'Api\GolfController@index');
    Route::post('golf/search', 'Api\GolfController@search');
    Route::post('golf/create','Api\GolfController@create');
    Route::post('golf/edit', 'Api\GolfController@edit');
    Route::post('golf/update','Api\GolfController@update');
    Route::post('golf/delete','Api\GolfController@delete');
    /*Tag関連
    Route::post('tag/create', 'Api\TagController@create');
    Route::post('meattag/create', 'Api\MeatTagController@create');
    */
});


/*
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
*/

