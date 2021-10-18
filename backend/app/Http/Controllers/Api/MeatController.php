<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Meat;

class MeatController extends Controller
{
    //
  public function index()
  {
    $meats = Meat::all();
    return response()->json($meats,200);
  }
}
