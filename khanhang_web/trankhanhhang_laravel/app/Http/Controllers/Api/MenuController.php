<?php

namespace App\Http\Controllers\Api;
use App\Models\Menu;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class MenuController extends Controller
{
    public function menu_list($position, $parent_id = 0)
    {
        $args = [
            ['position', '=', $position],
            ['parent_id', '=', $parent_id],
            ['status', '=', 1]
        ];
        $menus = Menu::where($args)
        ->orderBy('sort_order', 'ASC')
        ->get();
        if(count($menus))
        {
            return response()->json(
                ['success' => true, 'message' => 'Tải dữ liệu thành công', 'menus' => $menus],
                200);
    
        }
        else{
            return response()->json(
                ['success' => false, 'message' => 'Tải dữ liệu k thành công', 'menus' => null],
                200);
    
        }

    }

    //Get ---brand/index --lấy danh sách 
    public function index()

    {

        $menus = Menu::orderBy('created_at','DESC')->get();

        return response()->json(

            ['success' => true, 'message' => 'Tải dữ liệu thành công', 'menus' => $menus],

            200

        );
    }
    // Get -brand/show-- lấy ra 1 danh mục dựa vào id
    public function show($id)

    {

        $menu = Menu::find($id);

        return response()->json(

            ['success' => true, 'message' => 'Tải dữ liệu thành công', 'menu' => $menu], 

            200

        );
    }
    //Post- them store --them danh mục
    public function store(Request $request)
    {
        $menu = new Menu();
       // $menu->slug = Str::of($request->name)->slug('-');
        //$brand->image=$request->name;//xử lý riêng

        $menu->name = $request->name; //form

        $menu->link=$request->link;//form

        $menu->table_id = $request->table_id;

        $menu->type=$request->type;

        $menu->created_at = date('Y-m-d H:i:s');
        
        $menu->created_by = 1;
        
        $menu->status = $request->status; //form
        
        $menu->save(); //lưu vào Csdl
        
        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'menu' => $menu],
            201
        );
    }
    //category-update --cập nhật dnah mục
    public function update(Request $request, $id)

    {

        $menu = Menu::find($id);

        $menu->name = $request->name; //form

        $menu->link=$request->link;//form

        $menu->table_id = $request->table_id;

        $menu->type=$request->type;

        $menu->created_at = date('Y-m-d H:i:s');
        
        $menu->created_by = 1;

        $menu->updated_at = date('Y-m-d H:i:s');

        $menu->updated_by = 1; //takm cho =1



        
        $menu->status = $request->status; //form
        
        $menu->save(); //lưu vào Csdl

        return response()->json(

            ['success' => true, 'message' => 'Thành công', 'menu' => $menu], 

            200

        );
    }
    // xóa danh mục
    public function destroy ($id)
    {
        $menu = Menu::find($id);
        if($menu == null){
            return response()->json(
                ['message'=>'Tai du lieu thanh cong','success'=>false,'data'=> null],404
            );
        }
        $menu->delete();
        return response()->json(['message'=> 'thành công','success'=>true,'data'=>$menu],200);

    }


}
