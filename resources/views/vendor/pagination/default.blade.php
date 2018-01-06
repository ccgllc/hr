@if ($paginator->hasPages())
    <nav class="pagination" role="navigation" aria-label="pagination">
        {{-- Previous Page Link --}}
        @if ($paginator->onFirstPage())
            {{-- <li class="disabled"><span>&laquo;</span></li> --}}
            <a class="pagination-previous" disabled>Previous</a>
        @else
            {{-- <li><a href="{{ $paginator->previousPageUrl() }}" rel="prev">&laquo;</a></li> --}}
             <a href="{{ $paginator->previousPageUrl() }}" rel="prev" class="pagination-previous">Previous</a>
        @endif

        <ul class="pagination-list">

        {{-- Pagination Elements --}}
        @foreach ($elements as $element)
            {{-- "Three Dots" Separator --}}
            @if (is_string($element))
                {{-- <li class="disabled"><span>{{ $element }}</span></li> --}}
                <li><a class="pagination-link" aria-label="Goto page {{$element}}" disabled>{{ $element }}</a></li>
            @endif

            {{-- Array Of Links --}}
            @if (is_array($element))
                @foreach ($element as $page => $url)
                    @if ($page == $paginator->currentPage())
                        <li><a class="pagination-link is-current"><span>{{ $page }}</span></a></li>
                    @else
                        <li><a class="pagination-link" href="{{ $url }}">{{ $page }}</a></li>
                    @endif
                @endforeach
            @endif
        @endforeach

        </ul>

        {{-- Next Page Link --}}
        @if ($paginator->hasMorePages())
           {{--  <li><a href="{{ $paginator->nextPageUrl() }}" rel="next">&raquo;</a></li> --}}
           <a href="{{ $paginator->nextPageUrl() }}" rel="next" class="pagination-next">Next page</a>
        @else
           <a class="pagination-next" disabled><span>Next page</span></a>
        @endif
    </nav>
@endif
