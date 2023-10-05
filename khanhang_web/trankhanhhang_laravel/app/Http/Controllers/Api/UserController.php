<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
class UserController extends Controller
{
    public function index()
    {

        $users = User::all(); //::where()->orderBy()->get();

        return response()->json(

            ['success' => true, 'message' => "tai du lieu thanh cong", 'users' => $users],

            200

        );
    }
    public function getCustomer()
    {

        $users = User::where([['status', '=', 1], ['roles', '=', 'KHACHHANG']])->get();

        return response()->json(

            ['success' => true, 'message' => "tai du lieu thanh cong", 'users' => $users],

            200

        );
    }

    public function show($id)
    {

        $user = User::find($id);

        return response()->json(

            ['success' => true, 'message' => 'tai du lieu thanh cong', 'user' => $user],

            200

        );
    }
    //Post- them store
    public function store(Request $request)
    {
        $user = new User();
        $user->name = $request->name; 
        $user->email = $request->email; 
        $user->phone = $request->phone; 
        $user->username = $request->username; 
        $user->password = $request->password; 
        $user->address = $request->address; 
        $user->roles = $request->roles; 
        $user->created_at = date('Y-m-d H:i:s');
        $user->created_by = 1;
        $user->status = $request->status; //form
        $files = $request->image;
        if ($files != null) {
            $extension = $files->getClientOriginalExtension();
            if (in_array($extension, ['jpg', 'png', 'gif', 'webp', 'jpeg'])) {
                $filename = $user->slug . '.' . $extension;
                $user->image = $filename;
                $files->move(public_path('image/user'), $filename);
            }
        }

        $user->save(); //lưu vào Csdl
        return response()->json(
            ['success' => true, 'message' => 'Thanh cong', 'user' => $user],
            201
        );
    }
    //user-update
    public function update(Request $request, $id)
    {

        $user = User::find($id);
        $user->name = $request->name; 
        $user->email = $request->email; 
        $user->phone = $request->phone; 
        $user->username = $request->username; 
        $user->password = $request->password; 
        $user->address = $request->address; 
        $user->roles = $request->roles; 
        $user->created_at = date('Y-m-d H:i:s');
        $user->created_by = 1;
        $user->status = $request->status; //form
        $files = $request->image;
        if ($files != null) {
            $extension = $files->getClientOriginalExtension();
            if (in_array($extension, ['jpg', 'png', 'gif', 'webp', 'jpeg'])) {
                $filename = $user->slug . '.' . $extension;
                $user->image = $filename;
                $files->move(public_path('image/user'), $filename);
            }
        }

        $user->save(); //lưu vào Csdl

        return response()->json(

            ['success' => true, 'message' => 'Thanh cong', 'user' => $user],

            200

        );
    }
    //xoa
    public function destroy($id)
    {
        $user = user::find($id);
        if ($user == null) {
            return response()->json(
                ['message' => 'Tai du lieu khong thanh cong', 'success' => false, 'user' => null],
                404
            );
        }
        $user->delete();
        return response()->json(['message' => 'Thanh cong', 'success' => true, 'user' => $user], 200);

    }

}
