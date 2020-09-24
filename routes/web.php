<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
// イベント機能たち
Route::post('/eventadd', 'EventController@store');
Route::get('/eventget','EventController@index');
Route::get('/eventgettop','EventController@indextop');

// コンタクト機能たち
Route::post('/contactadd', 'ContactController@store');



Route::get('/{any}', function () {
    return view('vue');
})->where('any', '.*');
