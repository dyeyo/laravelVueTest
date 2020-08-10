<?php

Route::group(['prefix' => 'usuario'], function () {
  Route::get("user-data", "SpaController@getData");
});
