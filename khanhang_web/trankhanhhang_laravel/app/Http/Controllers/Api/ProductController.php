<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Str;


class ProductController extends Controller
{
    public function product_all($limit)
    {
        //$offset = ($page - 1) * $limit;
        $data = Product::where('status', 1)
            ->orderBy('created_at', 'DESC')
            // ->offset($offset)
            ->limit($limit)
            ->get();
        if (count($data) > 0) {
            return response()->json(['success' => true, 'message' => 'Tải dữ liệu thành công', 'products' => $data], 200);
        } else {
            return response()->json(
                [
                    'success' => false,
                    'message' => 'Tải dữ liệu k thành công',
                    'products' => $data
                ],
                200
            );
        }
    }


    public function product_new($limit)
    {
        //truy vấn
        $arg = [
            ['status', '=', 1]
        ];

        $product_new = Product::where($arg)

            ->orderBy('created_at', 'DESC')
            // ->offset($offset)
            ->limit($limit)
            ->get();
        return response()->json(
            [
                'success' => true,
                'message' => 'Tải dữ liệu thành công',
                'new_product' => $product_new 
            ],
            200
        );
    }
    public function product_sale($roles)
    {

        $product_sale = Product::where([['status', '=', 1], ['roles', '=', $roles]])
        ->get();

        return response()->json(

            ['success' => true, 'message' => "tai du lieu thanh cong", 'sale_product' => $product_sale],

            200

        );
    }
    public function product_detail($slug)
    {
        $product = Product::where([['status', '=', 1], ['slug', '=', $slug]])->first();
        if ($product == null) {
            return response()->json(
                [
                    'success' => false,
                    'message' => 'khong tim thay du lieu',
                    'product' => null
                ],
                404
            );
        }
        $listId = array();
        array_push($listId, $product->category_id);
        $args_cat1 = [
            ['parent_id', '=', $product->category_id],
            ['status', '=', 1]
        ];
        $list_category1 = Category::where($args_cat1)->get();
        if (count($list_category1) > 0) {
            foreach ($list_category1 as $row1) {
                array_push($listid, $row1->id);
                $args_cat2 = [
                    ['parent_id', '=', $row1->id],
                    ['status', '=', 1]
                ];
                $list_category2 = Category::where($args_cat2)->get();
                if (count($list_category2) > 0) {
                    foreach ($list_category2 as $row2) {
                        array_push($listid, $row2->id);
                    }
                }
            }
        }

        $product_other = Product::where([['status', '=', 1], ['id', '!=', $product->id]])
            ->whereIn('category_id', $listId)
            ->orderBy('created_at', 'DESC')
            ->limit(8)
            ->get();

        return response()->json(
            [
                'success' => true,
                'message' => "tai du lieu thanh cong",
                'product' => $product,
                'product_other' => $product_other
            ],
            200


        );
    }



    public function getByMetakey($metakey) // tìm kiếm sản phẩm theo metakey
    {
        $product = Product::where([['status', '=', 1], ['metakey', '=', $metakey]])->get();
        if ($product == null) {
            return response()->json(
                [
                    'success' => false,
                    'message' => 'khong tim thay du lieu',
                    'product' => null
                ],
                404
            );
        }

        return response()->json(
            [
                'success' => true,
                'message' => "tai du lieu thanh cong",
                'product' => $product

            ],
            200


        );
    }
    public function get_byPage($page, $limit)  //phân trang
    { 
        $to = Product::orderBy("created_at", "DESC")->get();


     

        $e=count($to)/$limit;
        $r=round($e);

        if($r<$e){
        
            $end=$r+1;
        }else{
            $end=$r;
        }


        $offset = ($page - 1) * $limit;
        $products = Product::orderBy("created_at", "DESC")
            ->offset($offset)
            ->limit($limit)
            ->get();

        return response()->json(

            ['success' => true, 'message' => "tai du lieu thanh cong", 'products' => $products,'end'=>$end],

            200

        );
    }
    public function product_brand($limit, $brand_id)
    {
        //truy vấn
        $arg = [
            ['brand_id', '=', $brand_id],
            ['status', '=', 1]
        ];

        $product_brand = Product::where($arg)

            ->orderBy('created_at', 'DESC')
            // ->offset($offset)
            ->limit($limit)
            ->get();
        return response()->json(
            [
                'success' => true,
                'message' => 'Tải dữ liệu thành công',
                'product_brand' => $product_brand
            ],
            200
        );
    }

    public function product_category($limit, $category_id) //$category_id=0
    {
        $listid = array();
        array_push($listid, $category_id + 0); //xét cấp con
        $args_cat1 = [
            ['parent_id', '=', $category_id + 0],
            ['status', '=', 1]
        ];
        $list_category1 = Category::where($args_cat1)->get();
        if (count($list_category1) > 0) {
            foreach ($list_category1 as $row1) {
                array_push($listid, $row1->id);
                $args_cat2 = [
                    ['parent_id', '=', $row1->id],
                    ['status', '=', 1]
                ];
                $list_category2 = Category::where($args_cat2)->get();
                if (count($list_category2) > 0) {
                    foreach ($list_category2 as $row2) {
                        array_push($listid, $row2->id);
                    }
                }
            }
        }
        // $offset = (1 - 1) * $limit;
        $product_category = Product::where('status', 1) //truy vấn
            ->whereIn('category_id', $listid)
            ->orderBy('created_at', 'DESC')
            //  ->offset($offset)
            ->limit($limit)
            ->get();
        return response()->json(['success' => true, 'message' => 'Tải dữ liệu thành công', 'product_category' => $product_category], 200);
    }



    public function product_home($limit, $category_id = 0)
    {
        $listid = array();
        array_push($listid, $category_id + 0);
        $args_cat1 = [
            ['parent_id', '=', $category_id + 0],
            ['status', '=', 1]
        ];
        $list_category1 = Category::where($args_cat1)->get();
        if (count($list_category1) > 0) {
            foreach ($list_category1 as $row1) {
                array_push($listid, $row1->id);
                $args_cat2 = [
                    ['parent_id', '=', $row1->id],
                    ['status', '=', 1]
                ];
                $list_category2 = Category::where($args_cat2)->get();
                if (count($list_category2) > 0) {
                    foreach ($list_category2 as $row2) {
                        array_push($listid, $row2->id);
                    }
                }
            }
        }
        $data = Product::where('status', '=', 1)
            ->whereIn('category_id', $listid)
            ->orderBy('created_at', 'DESC')->limit($limit)->get();
        return response()->json(['success' => true, 'message' => 'Tải dữ liệu thành công', 'products' => $data], 200);
    }


    //Get ---brand/index --lấy danh sách 

    public function index()

    {

        $products = Product::all(); //::where()->orderBy()->get();

        return response()->json(

            [
                'success' => true,
                'message' => 'Tải dữ liệu thành công',
                'products' => $products
            ],

            200

        );
    }
    // Get -brand/show-- lấy ra 1 danh mục dựa vào id
    public function show($id)

    {

        $product = Product::find($id);

        return response()->json(

            ['success' => true, 'message' => 'Tải dữ liệu thành công', 'product' => $product],

            200

        );
    }
    //Post- them store --them danh mục
    public function store(Request $request)
    {
        $product = new Product();
        $product->category_id = $request->category_id;


        $product->brand_id = $request->brand_id;

        $product->name = $request->name; //form

        $product->slug = Str::of($request->name)->slug('-');

        $product->price = $request->price; //form

        $product->pricesale = $request->pricesale; //form

        // $product->image = $request->name;
        $files = $request->image;
        if ($files != null) {
            $extension = $files->getClientOriginalExtension();
            if (in_array($extension, ['jpg', 'png', 'gif', 'webp', 'jpeg'])) {
                $filename = $product->slug . '.' . $extension;
                $product->image = $filename;
                $files->move(public_path('image/product'), $filename);
            }
        }

        $product->quality = $request->quality; //form

        $product->detail = $request->detail; //form

        $product->metakey = $request->metakey; //form

        $product->metadesc = $request->metadesc; //form

        $product->updated_at = date('Y-m-d H:i:s');

        $product->updated_by = 1; //takm cho =1

        $product->status = $request->status; //form

        $product->save(); //Luuu vao CSDL

        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'product' => $product],
            201
        );
    }
    //category-update --cập nhật dnah mục
    public function update(Request $request, $id)

    {

        $product = Product::find($id);

        $product->category_id = $request->category_id;

        $product->brand_id = $request->brand_id;

        $product->name = $request->name; //form

        $product->slug = Str::of($request->name)->slug('-');

        // $brand->image = $request->name;
        $files = $request->image;
        if ($files != null) {
            $extension = $files->getClientOriginalExtension();
            if (in_array($extension, ['jpg', 'png', 'gif', 'webp', 'jpeg'])) {
                $filename = $product->slug . '.' . $extension;
                $product->image = $filename;
                $files->move(public_path('image/product'), $filename);
            }
        }


        $product->price = $request->price; //form

        $product->pricesale = $request->pricesale; //form

        // $product->image = $request->name;
        $product->quality = $request->quantity; //form

        $product->detail = $request->detail; //form

        $product->metakey = $request->metakey; //form

        $product->metadesc = $request->metadesc; //form

        $product->updated_at = date('Y-m-d H:i:s');

        $product->updated_by = 1; //takm cho =1

        $product->status = $request->status; //form

        $product->save(); //Luuu vao CSDL

        return response()->json(

            ['success' => true, 'message' => 'Thành công', 'product' => $product],

            200

        );
    }
    // xóa danh mục
    public function destroy($id)
    {
        $product = Product::find($id);
        if ($product == null) {
            return response()->json(
                ['message' => 'Tai du lieu thanh cong', 'success' => false, 'data' => null],
                404
            );
        }
        $product->delete();
        return response()->json(['message' => 'thành công', 'success' => true, 'data' => $product], 200);
    }
}
