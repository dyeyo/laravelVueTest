<?php

Route::group(['prefix' => 'usuarios'], function () {
  Route::get("user-data", "UsersController@getuser");
});
