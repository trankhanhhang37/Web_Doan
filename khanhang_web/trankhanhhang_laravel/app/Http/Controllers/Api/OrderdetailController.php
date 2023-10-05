<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Orderdetail;
use Illuminate\Http\Request;

class OrderdetailController extends Controller
{
    //Get ---brand/index --lấy danh sách 
    public function index()

    {

        $orderdetails = Orderdetail::all(); //::where()->orderdetailBy()->get();

        return response()->json(

            ['success' => true, 'message' => 'Tải dữ liệu thành công', 'orderdetails' => $orderdetails],

            200

        );
    }
    // Get -brand/show-- lấy ra 1 danh mục dựa vào id
    public function show($id)

    {

        $orderdetail = orderdetail::find($id);

        return response()->json(

            ['success' => true, 'message' => 'Tải dữ liệu thành công', 'orderdetail' => $orderdetail],

            200

        );
    }
    //Post- them store --them danh mục
    public function store(Request $request)
    {
        $orderdetail = new orderdetail();
       // $menu->slug = Str::of($request->name)->slug('-');
        //$brand->image=$request->name;//xử lý riêng
        $orderdetail->order_id = $request->order_id;


        $orderdetail->product_id = $request->product_id;

        $orderdetail->price=$request->price;//form


        $orderdetail->quality=$request->quantity;

        $orderdetail->amount=$request->amount;
  
        $orderdetail->updated_at = date('Y-m-d H:i:s');

        $orderdetail->created_at = date('Y-m-d H:i:s');

        $orderdetail->save(); //lưu vào Csdl
        
        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'orderdetail' => $orderdetail],
            201
        );
    }
    //category-update --cập nhật dnah mục
    public function update(Request $request, $id)

    {

        $orderdetail = orderdetail::find($id);

        $orderdetail->order_id = $request->order_id;


        $orderdetail->product_id = $request->product_id;

        $orderdetail->price=$request->price;//form


        $orderdetail->quality=$request->quantity;

        $orderdetail->amount=$request->amount;
        
        $orderdetail->updated_at = date('Y-m-d H:i:s');

        $orderdetail->created_at = date('Y-m-d H:i:s');
        
        $orderdetail->save(); //lưu vào Csdl
        return response()->json(

            ['success' => true, 'message' => 'Thành công', 'data' => $orderdetail],

            200

        );
    }
    // xóa danh mục
    public function destroy ($id)
    {
        $orderdetail = orderdetail::find($id);
        if($orderdetail == null){
            return response()->json(
                ['message'=>'Tai du lieu thanh cong','success'=>false,'data'=> null],404
            );
        }
        $orderdetail->delete();
        return response()->json(['message'=> 'thành công','success'=>true,'data'=>$orderdetail],200);

    }

}
