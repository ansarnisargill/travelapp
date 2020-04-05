<script>
</script>
<!-- The application will be rendered inside this element,
		 because `src/client.js` references it -->
	<div id="ui" class="ui">


		<!--header start-->
		<header id="header" class="ui-header">

			<div class="navbar-header">
				<!--logo start-->
				<a href="." class="navbar-brand">
					<span class="logo"><img src="imgs/logo-dark.png" alt="" /></span>
					<span class="logo-compact"><img src="imgs/logo-icon-dark.png" alt="" /></span>
				</a>
				<!--logo end-->
			</div>

			<div class="search-dropdown dropdown pull-right visible-xs">
				<button type="button" class="btn dropdown-toggle" data-toggle="dropdown" aria-expanded="true"><i
						class="fa fa-search"></i></button>
				<div class="dropdown-menu">
					<form action="">
						<input class="form-control" placeholder="Search here..." type="text">
					</form>
				</div>
			</div>

			<div class="navbar-collapse nav-responsive-disabled">

				<!--toggle buttons start-->
				<ul class="nav navbar-nav">
					<li>
						<a class="toggle-btn" data-toggle="ui-nav" href="">
							<i class="fa fa-bars"></i>
						</a>
					</li>
				</ul>
				<!-- toggle buttons end -->

				<!--search start-->
				<form class="search-content hidden-xs" action="">
					<button type="submit" name="search" class="btn srch-btn">
						<i class="fa fa-search"></i>
					</button>
					<input type="text" class="form-control" name="keyword" placeholder="Search here...">
				</form>
				<!--search end-->

				<!--notification start-->
				<ul class="nav navbar-nav navbar-right">
		
					<li class="dropdown dropdown-usermenu">
						<a href="#" class=" dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
							<div class="user-avatar"><img src="imgs/a0.jpg" alt="..."></div>
							<span class="hidden-sm hidden-xs">John Doe</span>
							<!--<i class="fa fa-angle-down"></i>-->
							<span class="caret hidden-sm hidden-xs"></span>
						</a>
						<ul class="dropdown-menu dropdown-menu-usermenu pull-right">
							<li><a href="#"><i class="fa fa-cogs"></i> Settings</a></li>
							<li><a href="#"><i class="fa fa-user"></i> Profile</a></li>
							<li><a href="#"><i class="fa fa-commenting-o"></i> Feedback</a></li>
							<li><a href="#"><i class="fa fa-life-ring"></i> Help</a></li>
							<li class="divider"></li>
							<li><a href="#"><i class="fa fa-sign-out"></i> Log Out</a></li>
						</ul>
					</li>

				</ul>
				<!--notification end-->

			</div>

		</header>
		<!--header end-->

		<!--sidebar start-->
		<aside id="aside" class="ui-aside">
			<ul class="nav" ui-nav>
				<li class="nav-head">
					<h5 class="nav-title text-uppercase light-txt">Itineraries</h5>
				</li>
				<li>
					<a href=""><i class="fa fa-calendar"></i><span>Days</span><i
							class="fa fa-angle-right pull-right"></i></a>
					<ul class="nav nav-sub">
						<li class="nav-sub-header"><a href=""><span>Manage days</span></a></li>
						<li><a href="days"><span>Manage Days</span></a></li>
						<li><a href="dashboard-horizontal-nav.html"><span>Dashboard 2 <small
										class="label label-danger">TopNav</small></span></a></li>
					
					</ul>
				</li>

			</ul>
		</aside>
		<!--sidebar end-->

		<!--main content start-->
		<div id="content" class="ui-content">
			<div class="ui-content-body">

				<div class="ui-container">
					
							<div class="panel">
								<div class="panel-body">
								
	<slot></slot>

								</div>
							</div>

				</div>

			
			</div>
		</div>
		<!--main content end-->

		<!--footer start-->
		<div id="footer" class="ui-footer">
			2020 &copy; MegaDin by ThemeBucket.
		</div>
		<!--footer end-->

	</div>

