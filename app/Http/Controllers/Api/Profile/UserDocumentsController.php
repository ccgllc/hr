<?php

namespace App\Http\Controllers\Api\Profile;

use App\Http\Controllers\Controller;
use App\Http\Requests\ValidateDocument as Validate;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class UserDocumentsController extends Controller {

	public function store(Validate $request, $id)
	{
		$user = User::findOrFail($id);
		return $request->createDocument($user);
	}

	public function destroy(Request $request, $id)
	{
		$doc = \App\Document::findOrFail($id);
		return $doc ? $this->deleteFile($doc) : response('Record Not Found', 404)->header('Content-Type', 'text/plain');
	}

	protected function deleteFile($doc)
	{
		if (Storage::disk('hr')->exists($doc->path)) {
			Storage::disk('hr')->delete($doc->path);
		}
		$doc->delete();
		return response ('File Deleted', 200)->header('Content-Type', 'text/plain');
	}

}