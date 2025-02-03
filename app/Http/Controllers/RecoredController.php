<?php

namespace App\Http\Controllers;

use App\Models\Recored;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RecoredController extends Controller
{
    public function index(Request $request)
    {
        $data = $request->validate(['searchVal' => "string|nullable"]);
        $searchVal = data_get($data, "searchVal");
        $records = Recored::query()->when($searchVal, fn(Builder $q, string $searchVal)
            => $q->where("id", $searchVal)->orWhere("title", "LIKE", "%$searchVal%")->orWhere("notes", "LIKE", "%$searchVal%"))->paginate(20);
        return Inertia::render("Screen1", ["records" => $records]);
    }
}
