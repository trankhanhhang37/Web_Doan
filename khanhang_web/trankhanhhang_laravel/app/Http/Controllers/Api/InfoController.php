<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;

use App\Models\Info;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
class InfoController extends Controller
{
    public function index()
    {

        $infos = Info::all(); //::where()->orderBy()->get();

        return response()->json(

            ['success' => true, 'message' => "tai du lieu thanh cong", 'infos' => $infos],

            200

        );
    }

    public function show($id)
    {

        $info = info::find($id);

        return response()->json(

            ['success' => true, 'message' => 'tai du lieu thanh cong', 'info' => $info],

            200

        );
    }
    //Post- them store
    public function store(Request $request)
    {
        $info = new info();
        $info->name = $request->name; 
        $info->slug = Str::of($request->name)->slug('-');

        $info->email = $request->email; 
        $info->phone = $request->phone; 
        $info->address = $request->address; 
        $info->updated_at = date('Y-m-d H:i:s');

        $info->created_at = date('Y-m-d H:i:s');
        $info->created_by = 1;
        $info->status = $request->status; //form
        // $files = $request->image;
        // if ($files != null) {
        //     $extension = $files->getClientOriginalExtension();
        //     if (in_array($extension, ['jpg', 'png', 'gif', 'webp', 'jpeg'])) {
        //         $filename = $info->slug . '.' . $extension;
        //         $info->image = $filename;
        //         $files->move(public_path('image/info'), $filename);
        //     }
        // }

        $info->save(); //lưu vào Csdl
        return response()->json(
            ['success' => true, 'message' => 'Thanh cong', 'info' => $info],
            201
        );
    }
    //info-update
    public function update(Request $request, $id)
    {

        $info = info::find($id);
        $info->name = $request->name; 
        $info->slug = Str::of($request->name)->slug('-');

        $info->email = $request->email; 
        $info->phone = $request->phone; 
        $info->address = $request->address; 
        $info->updated_at = date('Y-m-d H:i:s');

        $info->created_at = date('Y-m-d H:i:s');
        $info->created_by = 1;
        $info->status = $request->status; //form

        $info->save(); //lưu vào Csdl

        return response()->json(

            ['success' => true, 'message' => 'Thanh cong', 'info' => $info],

            200

        );
    }
    //xoa
    public function destroy($id)
    {
        $info = info::find($id);
        if ($info == null) {
            return response()->json(
                ['message' => 'Tai du lieu khong thanh cong', 'success' => false, 'info' => null],
                404
            );
        }
        $info->delete();
        return response()->json(['message' => 'Thanh cong', 'success' => true, 'info' => $info], 200);

    }

}
