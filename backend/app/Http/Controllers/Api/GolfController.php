<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Golf;

class GolfController extends Controller
{
    //
	public function index()
  {
    $golfs = Golf::all();
    return $golfs;
  }
  public function create(Request $request)
  {
    $golf = new Golf;
    $golf->name = $request->name;
    $golf->address = $request->address;
    $golf->price = $request->price;
    $golf->phone = $request->phone;
    $golf->hp = $request->hp;
    $golf->moreInfo = $request->moreInfo;
    $path = $request->file('image')->store('public/image/');
    $filename = basename($path);
    $golf->image = $filename;
    $golf->courseInfo = $request->courseInfo;
		$golf->lat = $request->lat;
		$golf->lng = $request->lng;
    $golf->save();
    return response()->json($golf, 200);
  }
  public function edit(Request $request)
  {
    $golf = Golf::find($request->id);
    return $golf;
  }
  public function update(Request $request)
  {
    $golf = Golf::find($request->id);
    $golf->name = $request->name;
    $golf->address = $request->address;
    $golf->price = $request->price;
    $golf->phone = $request->phone;
    $golf->hp = $request->hp;
    $golf->moreInfo = $request->moreInfo;
    $golf->courseInfo = $request->courseInfo;
		$golf->lat = $request->lat;
		$golf->lng = $request->lng;
    $golf->save();
    $golfs = Golf::all();
    return $golfs;
  }
  public function delete(Request $request)
  {
    $golf = Golf::find($request->id);
    $golf->delete();
    $golfs = Golf::all();
    return $golfs;
  }
  public function search(Request $request)
  {
    $golf = golf::find($request->id);
    return response()->json($golf,200);
  }
}
