<nav aria-label="Sidebar" id="sidebar-inner" class="navbar navbar-vertical navbar-light navbar-expand-xl"
    :class="{ closed: !expanded, open: expanded }" id="sidebar">
    <div class="navbar-vertical-content scrollbar">
        <ul class="navbar-nav flex-column mb-3">
            <li v-if="expanded === true" v-cloak class="logo">
                <a href="/" aria-label="{{ config('logo-alt-text', 'ProcessMaker') }}">
                    @php
                        $logo = \ProcessMaker\Models\Setting::getLogo();
                    @endphp
                    <img src={{ $logo }} alt="{{ config('logo-alt-text', 'ProcessMaker') }}"
                        style="filter: invert(1)">
                </a>
            </li>


            @if ($sidebar)
                @foreach (Menu::get('topnav')->items->all() as $parentSection)
                    {{-- <li class="nav-item" aria-label="{{ $section->title }}" v-cloak>{{ $section->title }}</li> --}}
                    @if (strtoupper($sidebar->topMenu()->items[0]->title) == strtoupper($parentSection->title))
                        @foreach ($sidebar->topMenu()->items as $section)
                            {{-- <li class="nav-item" aria-label="{{ $section->title }}" v-cloak>{{ $section->title }}</li> --}}
                            <a href="" class="nav-link dropdown-indicactor">
                                <div class="d-flex align-items-center">
                                    <span class="nav-link-text ps-1">{{ $parentSection->title }}
                                    </span>
                                </div>
                            </a>
                            <ul class="nav collapse show">
                                @foreach ($section->children() as $item)
                                    <li class="nav-item">
                                        <a class="nav-link {{ isset($item->attributes['class']) ? 'active' : '' }}"
                                            href={{ $item->url() }}>
                                            <div class="d-flex align-items-center">
                                                <span class="nav-link-icon">
                                                    <i
                                                        class="fas {{ isset($item->attributes['icon']) ? $item->attributes['icon'] : '' }}"></i>
                                                </span>
                                                <span class="nav-link-text ps-1">
                                                    {{ $item->title }}
                                                </span>
                                            </div>
                                        </a>
                                    </li>
                                @endforeach
                            </ul>
                        @endforeach
                    @else
                        <a href="{{ $parentSection->url() }}" class="nav-link dropdown-indicactor">
                            <div class="d-flex align-items-center">
                                <span class="nav-link-text ps-1">{{ $parentSection->title }}
                                </span>
                            </div>
                        </a>
                    @endif
                @endforeach

            @endif
        </ul>
</nav>
