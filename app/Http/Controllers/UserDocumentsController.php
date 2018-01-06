<?php

namespace App\Http\Controllers;

use App\Document;
use App\User;
use Illuminate\Http\Request;

class UserDocumentsController extends Controller
{
    public function index($id)
    {
    	$user = User::find($id)->firstOrFail();
    	$user->load('documents');

    	return $user;
    }
    public function show($userId, $id)
    {
    	$document = Document::whereId($id)->firstOrFail();
  		$disk = storage_path().'/hr/';
    	$file = $disk.'/'.$document->path;
		return response()->download($file, $document->user->name.$document->name); 
    }
}
