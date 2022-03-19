function nav_admin() {
    var admin = $('.admin')

    if (localStorage.getItem('login') == 'true') {
        $('#linav').append(`
                    <li>
                        <a href="logout.html"
                            class="block py-2 px-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-emerald-600 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                            <span class="md:hidden">
                                <i class="fa fa-sign-out"></i>
                            </span>
                            <span class="hidden md:block">
                                Logout
                            </span>
                        </a>
                    </li>`)
    } else {
        for (var i = 0; i < admin.length; i++) {
            admin[i].style.display = "none"
        }
    }
}