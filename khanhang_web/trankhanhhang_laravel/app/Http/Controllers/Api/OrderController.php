<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Order;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    //Get ---brand/index --lấy danh sách 
    public function index()

    {

        $orders = Order::orderBy('created_at','DESC')->get();

        return response()->json(

            ['success' => true, 'message' => 'Tải dữ liệu thành công', 'orders' => $orders],

            200

        );
    }
    // Get -brand/show-- lấy ra 1 danh mục dựa vào id
    public function show($id)

    {

        $order = Order::find($id);

        return response()->json(

            ['success' => true, 'message' => 'Tải dữ liệu thành công', 'order' => $order],

            200

        );
    }
    //Post- them store --them danh mục
    public function store(Request $request)
    {
        $order = new Order();
       // $menu->slug = Str::of($request->name)->slug('-');
        //$brand->image=$request->name;//xử lý riêng
        $order->user_id = $request->user_id;


        $order->name = $request->name; //form

        $order->phone=$request->phone;//form


        $order->email=$request->email;

        $order->address=$request->address;

        $order->note=$request->note;


        $order->created_at = date('Y-m-d H:i:s');
        
        $order->created_by = 1;
        
        $order->status = $request->status; //form
        
        $order->save(); //lưu vào Csdl
        
        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'order' => $order],
            201
        );
    }
    //category-update --cập nhật dnah mục
    public function update(Request $request, $id)

    {

        $order = Order::find($id);

        $order->user_id = $request->user_id;


        $order->name = $request->name; //form

        $order->phone=$request->phone;//form


        $order->email=$request->email;

        $order->address=$request->address;

        $order->note=$request->note;


        $order->created_at = date('Y-m-d H:i:s');
        
        $order->created_by = 1;
        
        $order->status = $request->status; //form
        
        $order->save(); //lưu vào Csdl
        return response()->json(

            ['success' => true, 'message' => 'Thành công', 'order' => $order],

            200

        );
    }
    // xóa danh mục
    public function destroy ($id)
    {
        $order = Order::find($id);
        if($order == null){
            return response()->json(
                ['message'=>'Tai du lieu thanh cong','success'=>false,'data'=> null],404
            );
        }
        $order->delete();
        return response()->json(['message'=> 'thành công','success'=>true,'data'=>$order],200);

    }

}
