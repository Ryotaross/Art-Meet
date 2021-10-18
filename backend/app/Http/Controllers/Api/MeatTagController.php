<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\MeatTag;

class MeatTagController extends Controller
{
    //
  public function create(Request $request)
  {
    $meatTag = new MeatTag;
    $meatTag->meat_id = $request->meat_id;
    $meatTag->tag_id = $request->tag_id;
    $meatTag->save();
    return response()->json($meatTag, 200);
  }
}
