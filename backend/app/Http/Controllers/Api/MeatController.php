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
  public function create(Request $request)
  {
    $meat = new Meat;
    $meat->name = $request->name;
    $meat->maker = $request->maker;
    $meat->materials = $request->materials;
    $meat->officialUrl = $request->officialUrl;
    $meat->amazonUrl = $request->amazonUrl;
    $meat->rakutenUrl = $request->rakutenUrl;
    $meat->image = $request->image;
    $meat->startDay = $request->startDay;
    $meat->save();
    return response()->json($meat, 200);
  }
  public function edit(Request $request)
  {
    $meat = Meat::find($request->id);
    return $meat;
  }
  public function update(Request $request)
  {
    $meat = Meat::find($request->id);
    $meat->name = $request->name;
    $meat->maker = $request->maker;
    $meat->materials = $request->materials;
    $meat->officialUrl = $request->officialUrl;
    $meat->amazonUrl = $request->amazonUrl;
    $meat->rakutenUrl = $request->rakutenUrl;
    $meat->image = $request->image;
    $meat->startDay = $request->startDay;
    $meat->save();
    $meats = Meat::all();
    return $meats;
  }
  public function delete(Request $request)
  {
    $meat = Meat::find($request->id);
    $meat->delete();
    $meats = Meat::all();
    return $meats;
  }
}
