<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Tag;

class TagController extends Controller
{
    //
  public function create(Request $request)
  {
    $tag = new Tag;
    $tag->tagName = $request->tagName;
    $tag->save();
    return response()->json($tag, 200);
  }
}
