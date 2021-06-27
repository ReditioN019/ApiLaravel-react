<?php

use App\Http\Controllers\API\CalleController;
use App\Http\Controllers\API\CiudadController;
use App\Http\Controllers\API\ProvinciaController;
use App\Http\Controllers\API\RegionController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

//RUTAS DE LA API (metodo get)
Route::get('region', [RegionController::class, 'index']);
Route::get('provincia', [ProvinciaController::class, 'index']);
Route::get('ciudad', [CiudadController::class, 'index']);
Route::get('calle', [CalleController::class, 'index']);
