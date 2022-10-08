@extends('layouts.app')

@section('content')
<div class="container-fluid">
  <div class="row text-center">
    <div class="col-12">
      @if (session('restore'))
        <div class="alert alert-primary">
          <span>{{ session('restore') }}</span>
        </div>
      @endif
      
      <table class="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Titolo</th>
            <th scope="col">Tag</th>
            <th scope="col">UserName</th>
            <th scope="col">UserId</th>
            <th scope="col">Modifica/Elimina</th>
          </tr>
        </thead>
        @forelse ($posts as $post)
          <tbody>
            <tr>
              <th scope="row">{{ $post->id }}</th>
              <td><a class="ms_a_posts" href="{{ route('admin.posts.show', $post->id) }}">{{ $post->title }}</a></td>
              <td>
                 @forelse ($post->tags as $tag )
                   #{{ $tag->name }}
                 @empty
                   Nessun tag
                 @endforelse
              </td>
              <td>{{ $post->user->name }}</td>
              <td>{{ $post->user_id }}</td>
              <td>
                <form action="{{ route('admin.posts.restore', $post->id) }}" method="POST" class="d-inline">
                  <button class="btn btn-warning text-monospace">Ripristina</button>
                  @csrf
                  @method('PATCH')
                </form>
              </td>
            </tr>
          </tbody>
        @empty
          <div class="col-12">
            <h1>Non ci sono Post</h1>  
          </div>  
        @endforelse
      </table>
    </div>
  </div>
</div>
@endsection