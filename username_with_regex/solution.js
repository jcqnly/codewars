let validateUsr = username => RegExp('^[a-z0-9_]{4,16}$').test(username);