<template>
	<div id="navbar">
		<nav class="navbar navbar-expand-lg navbar-dark">
			<div class="container-fluid">
				<a class="navbar-brand" href="/home">
					GESTIÓN ACADÉMICA
				</a>
				<button class="navbar-toggler" type="button" data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
					aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav me-auto mb-2 mb-lg-0">
						<li class="nav-item dropdown">
							<a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
								aria-expanded="false">
								Estudiante
							</a>
							<ul class="dropdown-menu" aria-labelledby="navbarDropdown">
								<li>
									<router-link to="/createE" class="dropdown-item">
										Crear
									</router-link>
								</li>

								<li>
									<router-link to="/listarE" class="dropdown-item">
										Listar
									</router-link>
								</li>
							</ul>
						</li>
						<li class="nav-item dropdown">
							<a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
								aria-expanded="false">
								Curso
							</a>
							<ul class="dropdown-menu" aria-labelledby="navbarDropdown">
								<li>
									<router-link to="/createC" class="dropdown-item">
										Crear
									</router-link>
								</li>

								<li>
									<router-link to="/listarC" class="dropdown-item">
										Listar
									</router-link>
								</li>
							</ul>
						</li>
						<li class="nav-item dropdown">
							<a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
								aria-expanded="false">
								Curso_Estudiante
							</a>
							<ul class="dropdown-menu" aria-labelledby="navbarDropdown">

								<li>
									<router-link to="/listarCE" class="dropdown-item">
										Listar
									</router-link>
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
			<div class="logout">
				<a class="navbar-brand" href="/login">
					LOGOUT
				</a>
			</div>
		</nav>
	</div>
</template>