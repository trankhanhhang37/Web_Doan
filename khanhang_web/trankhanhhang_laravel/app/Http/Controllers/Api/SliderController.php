<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Slider;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class SliderController extends Controller
{
    public function index()
    {

        $sliders = Slider::all(); //::where()->orderBy()->get();

        return response()->json(

            ['success' => true, 'message' => "tai du lieu thanh cong", 'sliders' => $sliders],

            200

        );
    }
    public function show($id)
    {

        $slider = Slider::find($id);

        return response()->json(

            ['success' => true, 'message' => 'tai du lieu thanh cong', 'slider' => $slider],

            200

        );
    }
    //Post- them store
    public function store(Request $request)
    {
        $slider = new Slider();
        $slider->name = $request->name;
        $slider->link = $request->link;
        $slider->sort_order = $request->sort_order;
        $slider->position = $request->position;
        $slider->created_at = date('Y-m-d H:i:s');
        $slider->created_by = 1;
        $slider->status = $request->status; //form
        $files = $request->image;
        if ($files != null) { 
            $extension = $files->getClientOriginalExtension();
            if (in_array($extension, ['jpg', 'png', 'gif', 'webp', 'jpeg'])) {
                $filename = $slider->name . '.' . $extension;
                $slider->image = $filename;
                $files->move(public_path('image/slider'), $filename);
            }
        }

        $slider->save(); //lưu vào Csdl
        return response()->json(
            ['success' => true, 'message' => 'Thanh cong', 'slider' => $slider],
            201
        );
    }
    //Slider-update
    public function update(Request $request, $id)
    {

        $slider = Slider::find($id);

        $slider->name = $request->name;
        $slider->link = $request->link;
        $slider->sort_order = $request->sort_order;
        $slider->position = $request->position;
        $slider->created_at = date('Y-m-d H:i:s');
        $slider->created_by = 1;
        $slider->status = $request->status; //form r swuar chỗ nào nx
        $files = $request->image;
        if ($files != null) { 
            $extension = $files->getClientOriginalExtension();
            if (in_array($extension, ['jpg', 'png', 'gif', 'webp', 'jpeg'])) {
                $filename = $slider->name . '.' . $extension;
                $slider->image = $filename;
                $files->move(public_path('image/slider'), $filename);
            }
        }
        $slider->save(); //lưu vào Csdl

        return response()->json(

            ['success' => true, 'message' => 'Thanh cong', 'data' => $slider],

            200

        );
    }
    //xoa
    public function destroy($id)
    {
        $slider = Slider::find($id);
        if ($slider == null) {
            return response()->json(
                ['message' => 'Tai du lieu khong thanh cong', 'success' => false, 'data' => null],
                404
            );
        }
        $slider->delete();
        return response()->json(['message' => 'Thanh cong', 'success' => true, 'data' => $slider], 200);
    }

    public function slider_list($position)
    {
        $args = [
            ['position', '=', $position],
            ['status', '=', 1]
        ];
        $slider = Slider::where($args)->orderBy('sort_order', 'ASC')->get();
        return response()->json(['message' => 'Thanh cong', 'success' => true, 'sliders' => $slider], 200);
    }
}
