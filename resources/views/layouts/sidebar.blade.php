<nav aria-label="Sidebar" id="sidebar-inner" class="navbar navbar-vertical navbar-light navbar-expand-xl" :class="{ closed: !expanded, open: expanded }">  <div class="navbar-vertical-content scrollbar">
  <ul class="navbar-nav flex-column mb-3">
      <li v-if="expanded === true" v-cloak class="logo">
      <a href="/" aria-label="{{ config('logo-alt-text', 'ProcessMaker') }}">
          @php
            $logo = \ProcessMaker\Models\Setting::getLogo();
          @endphp
          <img src={{$logo}} alt="{{ config('logo-alt-text', 'ProcessMaker') }}" style="filter: invert(1)">
        </a>
      </li>
      <li v-else v-cloak class="logo-closed">
      
      @if ($sidebar)
        @foreach($sidebar->topMenu()->items as $section)
          <li class="nav-item" aria-label="{{$section->title}}" v-cloak>{{$section->title}}</li>
        <ul class="nav collapse show">
         @foreach($section->children() as $item)
            <sidebaricon :item='@lavaryMenuJson($item)'></sidebaricon>
            <li class="nav-item">
                <a class="nav-link {{isset($item->attributes['class']) ? 'active' : ''}}" href={{$item->url}}>
                    <div class="d-flex align-items-center">
                    <span class="nav-link-icon">
                        <i class="fas {{$item->attributes['icon']}}"></i>
                    </span>
                    <span class="nav-link-text ps-1">
                        {{$item->title}}
                    </span>
                    </div>
                </a>
            </li>
            @endforeach
            </ul>
         @endforeach
      @endif
    </ul>
</nav>
