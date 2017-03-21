<?php

namespace App\Http\Controllers;

use App\Events\MessageSent;
use App\Message;
use Auth;
use Illuminate\Http\Request;

class ChatController extends Controller
{
    //
    /**
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index()
    {
        $data = [];
        return view('chat',$data);
    }

    /**
     * Persist message to database
     *
     * @param  Request $request
     * @return Response
     */
    public function sendMessage(Request $request)
    {
        $user = Auth::user();

        $message = $user->messages()->create([
            'message' => $request->input('message')
        ]);

        // Broadcast
        broadcast(new MessageSent($user, $message))->toOthers();

        return ['status' => 'Message Sent!'];
    }

    /**
     * Fetch all message
     *
     * @return Message
     */
    public function fetchMessage()
    {
        // Lazy loading -> Eager Loading
        return Message::with('user')->get();
    }

}
