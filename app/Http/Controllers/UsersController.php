<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\usuarios;

class UsersController extends Controller
{
  public function getuser()
  {
  	return usuarios::all();
  }
}
