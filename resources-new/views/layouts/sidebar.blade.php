@php
    $icon = \ProcessMaker\Models\Setting::getIcon();
@endphp
<nav aria-label="Sidebar" id="sidebar-inner" class="navbar navbar-light navbar-vertical navbar-expand-xl" :class="{ closed: !expanded, open: expanded }">
    <div class="d-flex align-items-center">
         <div class="toggle-icon-wrapper">

            <button class="btn navbar-toggler-humburger-icon navbar-vertical-toggle" data-bs-toggle="tooltip" data-bs-placement="left" title="Toggle Navigation"><span class="navbar-toggle-icon"><span class="toggle-line"></span></span></button>

      </div><a class="navbar-brand" href="index.html">
       <div class="d-flex align-items-center py-3">
        <img class="me-2" src={{$icon}} alt="" width="40" /><span class="font-sans-serif">{{config('app-name','what')}}</span>
       </div>
      </a>
  </div>
  <div class="collapse navbar-collapse">
    <div class="navbar-vertical-content scrollbar">
    <ul class="navbar-nav flex-column mb-3">
      <li v-if="expanded === true" v-cloak class="logo">
      <!--<a href="/" aria-label="{{ config('logo-alt-text', 'ProcessMaker') }}">
          @php
            $logo = \ProcessMaker\Models\Setting::getLogo();
          @endphp
          <img src={{$logo}} alt="{{ config('logo-alt-text', 'ProcessMaker') }}">
        </a>
      </li>
      <li v-else v-cloak class="logo-closed">
      <a href="/" aria-label="{{ config('logo-alt-text', 'ProcessMaker') }}">
          @php
            $icon = \ProcessMaker\Models\Setting::getIcon();
          @endphp
          <img src={{$icon}} alt="{{ config('logo-alt-text', 'ProcessMaker') }}">
        </a>
      </li>-->
      @if ($sidebar)
        @foreach($sidebar->topMenu()->items as $section)
          <li class="nav-item"  aria-label="{{$section->title}}" v-cloak>{{$section->title}}</li>
          @foreach($section->children() as $item)
            <sidebaricon :item='@lavaryMenuJson($item)'></sidebaricon>
          @endforeach
        @endforeach
      @endif
    </ul>
    </div>
  </div>
<!--
  <div class="w-100" v-cloak>
    <div
      v-if="expanded"
      @click="expanded = !expanded"
      role="button"
      :aria-label="$t('Collapse sidebar')"
      class="nav-item filter-bar justify-content-between py-2 sidebar-expansion"
    >
      <div class="nav-link">
        <i class="fas fa-angle-double-left nav-icon" v-if="expanded"></i>
        <i class="fas fa-angle-double-right nav-icon" v-else></i>
        <span class="nav-text" v-if="expanded" v-cloak >
          {{ __('Collapse sidebar') }}
        </span>
</div>
    </div>
    <div
      v-else
      @click="expanded = !expanded"
      role="button"
      :aria-label="$t('Expand sidebar')"
      class="nav-item filter-bar justify-content-between py-2 sidebar-expansion"
      v-b-tooltip.hover.right="{ title: $t('Expand sidebar'), animation: false, boundary: 'viewport', delay: { show: 0, hide: 0 } }"
    >
      <div class="nav-link">
        <i class="fas fa-angle-double-right nav-icon"></i>
      </div>
    </div>
  </div>-->
</nav>
