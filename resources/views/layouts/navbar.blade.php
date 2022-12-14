<nav class="navbar navbar-light navbar-glass navbar-top navbar-expand" id="navbar">
    <button class="btn navbar-toggler-humburger-icon navbar-toggler me-1 me-sm-3" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarVerticalCollapse" aria-controls="navbarVerticalCollapse" aria-expanded="false"
        aria-label="Toggle Navigation"><span class="navbar-toggle-icon"><span class="toggle-line"></span></span></button>

    <ul class="navbar-nav align-items-center d-none d-lg-block">
        <li class="nav-item">
            <div class="search-box" data-list='{"valueNames":["title"]}'>
                <form class="position-relative" data-bs-toggle="search" data-bs-display="static">
                    <input class="form-control search-input fuzzy-search" type="search" placeholder="Search..."
                        aria-label="Search" />
                    <span class="fas fa-search search-box-icon"></span>

                </form>
                <div class="btn-close-falcon-container position-absolute end-0 top-50 translate-middle shadow-none"
                    data-bs-dismiss="search">
                    <div class="btn-close-falcon" aria-label="Close"></div>
                </div>
                <div class="dropdown-menu border font-base start-0 mt-2 py-0 overflow-hidden w-100">
                    <div class="scrollbar list py-3" style="max-height: 24rem;">
                        <h6 class="dropdown-header fw-medium text-uppercase px-card fs--2 pt-0 pb-2">Recently Browsed
                        </h6><a class="dropdown-item fs--1 px-card py-1 hover-primary"
                            href="app/events/event-detail.html">
                            <div class="d-flex align-items-center">
                                <span class="fas fa-circle me-2 text-300 fs--2"></span>

                                <div class="fw-normal title">Pages <span
                                        class="fas fa-chevron-right mx-1 text-500 fs--2"
                                        data-fa-transform="shrink-2"></span> Events</div>
                            </div>
                        </a>
                        <a class="dropdown-item fs--1 px-card py-1 hover-primary" href="app/e-commerce/customers.html">
                            <div class="d-flex align-items-center">
                                <span class="fas fa-circle me-2 text-300 fs--2"></span>

                                <div class="fw-normal title">E-commerce <span
                                        class="fas fa-chevron-right mx-1 text-500 fs--2"
                                        data-fa-transform="shrink-2"></span> Customers</div>
                            </div>
                        </a>

                        <hr class="text-200 dark__text-900" />
                        <h6 class="dropdown-header fw-medium text-uppercase px-card fs--2 pt-0 pb-2">Suggested Filter
                        </h6><a class="dropdown-item px-card py-1 fs-0" href="app/e-commerce/customers.html">
                            <div class="d-flex align-items-center"><span
                                    class="badge fw-medium text-decoration-none me-2 badge-soft-warning">customers:</span>
                                <div class="flex-1 fs--1 title">All customers list</div>
                            </div>
                        </a>
                        <a class="dropdown-item px-card py-1 fs-0" href="app/events/event-detail.html">
                            <div class="d-flex align-items-center"><span
                                    class="badge fw-medium text-decoration-none me-2 badge-soft-success">events:</span>
                                <div class="flex-1 fs--1 title">Latest events in current month</div>
                            </div>
                        </a>
                        <a class="dropdown-item px-card py-1 fs-0" href="app/e-commerce/product/product-grid.html">
                            <div class="d-flex align-items-center"><span
                                    class="badge fw-medium text-decoration-none me-2 badge-soft-info">products:</span>
                                <div class="flex-1 fs--1 title">Most popular products</div>
                            </div>
                        </a>


                        <hr class="text-200 dark__text-900" />
                        <h6 class="dropdown-header fw-medium text-uppercase px-card fs--2 pt-0 pb-2">Members</h6>

                    </div>
                    <div class="text-center mt-n3">
                        <p class="fallback fw-bold fs-1 d-none">No Result Found.</p>
                    </div>
                </div>
            </div>
        </li>
    </ul>
    <ul class="navbar-nav navbar-nav-icons ms-auto flex-row align-items-center">

        <li class="nav-item dropdown">
            <a class="nav-link notification-indicator notification-indicator-primary px-0 fa-icon-wait"
                id="navbarDropdownNotification" role="button" data-bs-toggle="dropdown" aria-haspopup="true"
                aria-expanded="false" data-hide-on-body-scroll="data-hide-on-body-scroll"><span class="fas fa-bell"
                    data-fa-transform="shrink-6" style="font-size: 33px;"></span></a>
            {{-- <div class="dropdown-menu dropdown-caret dropdown-caret dropdown-menu-end dropdown-menu-card dropdown-menu-notification dropdown-caret-bg"
                aria-labelledby="navbarDropdownNotification">
                <div class="card card-notification shadow-none">
                    <div class="card-header">
                        <div class="row justify-content-between align-items-center">
                            <div class="col-auto">
                                <h6 class="card-header-title mb-0">Notifications</h6>
                            </div>
                            <div class="col-auto ps-0 ps-sm-3"><a class="card-link fw-normal" href="#">Mark all
                                    as read</a></div>
                        </div>
                    </div>
                    <div class="scrollbar-overlay" style="max-height:19rem">
                        <div class="list-group list-group-flush fw-normal fs--1">
                            <div class="list-group-title border-bottom">NEW</div>
                            <div class="list-group-item">
                                <a class="notification notification-flush notification-unread" href="#!">
                                    <div class="notification-avatar">
                                        <div class="avatar avatar-2xl me-3">
                                            <img class="rounded-circle" src="assets/img/team/1-thumb.png"
                                                alt="" />

                                        </div>
                                    </div>
                                    <div class="notification-body">
                                        <p class="mb-1"><strong>Emma Watson</strong> replied to your comment : "Hello
                                            world ????"</p>
                                        <span class="notification-time"><span class="me-2" role="img"
                                                aria-label="Emoji">????</span>Just now</span>

                                    </div>
                                </a>

                            </div>
                            <div class="list-group-item">
                                <a class="notification notification-flush notification-unread" href="#!">
                                    <div class="notification-avatar">
                                        <div class="avatar avatar-2xl me-3">
                                            <div class="avatar-name rounded-circle"><span>AB</span></div>
                                        </div>
                                    </div>
                                    <div class="notification-body">
                                        <p class="mb-1"><strong>Albert Brooks</strong> reacted to <strong>Mia
                                                Khalifa's</strong> status</p>
                                        <span class="notification-time"><span
                                                class="me-2 fab fa-gratipay text-danger"></span>9hr</span>

                                    </div>
                                </a>

                            </div>
                            <div class="list-group-title border-bottom">EARLIER</div>
                            <div class="list-group-item">
                                <a class="notification notification-flush" href="#!">
                                    <div class="notification-avatar">
                                        <div class="avatar avatar-2xl me-3">
                                            <img class="rounded-circle" src="assets/img/icons/weather-sm.jpg"
                                                alt="" />

                                        </div>
                                    </div>
                                    <div class="notification-body">
                                        <p class="mb-1">The forecast today shows a low of 20&#8451; in California.
                                            See today's weather.</p>
                                        <span class="notification-time"><span class="me-2" role="img"
                                                aria-label="Emoji">???????</span>1d</span>

                                    </div>
                                </a>

                            </div>
                            <div class="list-group-item">
                                <a class="border-bottom-0 notification-unread  notification notification-flush"
                                    href="#!">
                                    <div class="notification-avatar">
                                        <div class="avatar avatar-xl me-3">
                                            <img class="rounded-circle" src="assets/img/logos/oxford.png"
                                                alt="" />

                                        </div>
                                    </div>
                                    <div class="notification-body">
                                        <p class="mb-1"><strong>University of Oxford</strong> created an event :
                                            "Causal Inference Hilary 2019"</p>
                                        <span class="notification-time"><span class="me-2" role="img"
                                                aria-label="Emoji">??????</span>1w</span>

                                    </div>
                                </a>

                            </div>
                            <div class="list-group-item">
                                <a class="border-bottom-0 notification notification-flush" href="#!">
                                    <div class="notification-avatar">
                                        <div class="avatar avatar-xl me-3">
                                            <img class="rounded-circle" src="assets/img/team/10.jpg"
                                                alt="" />

                                        </div>
                                    </div>
                                    <div class="notification-body">
                                        <p class="mb-1"><strong>James Cameron</strong> invited to join the group:
                                            United Nations International Children's Fund</p>
                                        <span class="notification-time"><span class="me-2" role="img"
                                                aria-label="Emoji">???????</span>2d</span>

                                    </div>
                                </a>

                            </div>
                        </div>
                    </div>
                    <div class="card-footer text-center border-top"><a class="card-link d-block"
                            href="app/social/notifications.html">View all</a></div>
                </div>
            </div> --}}

        </li>


        @php
            $items = [];
            foreach ($dropdown_nav->items as $item) {
                $newItem = new stdClass();
                $newItem->class = 'fas ' . $item->attr('icon') . ' fa-fw fa-lg';
                $newItem->title = $item->title;
                $newItem->url = $item->url();
                $items[] = $newItem;
            }
            $items = json_encode($items);
            $user = Auth::user();
            
        @endphp
        {{-- <navbar-profile :info="{{ $user }}" :items="{{ $items }}"></navbar-profile> --}}
        <li class="nav-item dropdown"><a class="nav-link pe-0 ps-2" id="navbarDropdownUser" role="button"
                data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <div class="avatar avatar-xl">
                    <div class="avatar-name rounded-circle"><span>{{ $user->firstname[0] . $user->lastname[0] }}</span>
                    </div>
                </div>
            </a>
            <div class="dropdown-menu dropdown-caret dropdown-caret dropdown-menu-end py-0"
                aria-labelledby="navbarDropdownUser">
                <div class="bg-white dark__bg-1000 rounded-2 py-2">
                    <a class="dropdown-item fw-bold text-warning" href="#!"><span
                            class="fas fa-crown me-1"></span><span>Go Pro</span></a>

                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#!">Set status</a>
                    <a class="dropdown-item" href="pages/user/profile.html">Profile &amp; account</a>
                    <a class="dropdown-item" href="#!">Feedback</a>

                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="pages/user/settings.html">Settings</a>
                    <a class="dropdown-item" href="pages/authentication/card/logout.html">Logout</a>
                </div>
            </div>
        </li>
    </ul>
</nav>
