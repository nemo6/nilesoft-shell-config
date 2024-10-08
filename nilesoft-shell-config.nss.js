settings
{
	priority=1
	exclude.where = !process.is_explorer
	showdelay = 0
	modify.remove.duplicate=1
	tip.enabled=true
}

import "imports/theme.nss"

remove( find="Ouvrir avec" )
remove( find="Regrouper par")
remove( find="Microsoft Defender")
remove( find="Copier en tant que")
remove( find="Personnaliser ce")
remove( find="Extraire tout")
remove( find="Annuler")
remove( find="Répéter Renommer")
remove( find="Envoyer une copie")
remove( find="Dropbox")
remove( find="VLC")
remove( find="Partager")
remove( find="Accorder l'accès")
remove( find="Restaurer les versions")
remove( find="Épingler")
remove( find="Windows Media")
remove( find="Inclure")
remove( find="Résoudre")
remove( find="Imprimer")
remove( find="Historique des versions")
remove( find="Copier dans un dossier")
remove( find="Déplacer vers un dossier")
remove( find="avec Paint")
remove( find="Choisir comme arrière-plan du bureau")
remove( find="Faire pivoter")
remove( find="Lire sur l’appareil")
remove( find="Ouvrir dans un nouveau processus")
remove( find="Transférer copie")
remove( find="Stocker en ligne")
remove( find="Gérer accès dossier")

// $has_admin=key.shift()

// modify( find="Éditer avec" Visibility="Normal" )

menu( title="Terminal" sep="top" mode="multiple" sep="both" ){}

modify( find="Open with Sublime Text" Position=4 sep="both" )

modify( find="7-zip" vis=@key.shift() Position=5 sep="both" )

modify( find="Restaurer" Position=0 )

// ╔ Copier le chemin ╗

	item( vis=@(sel.count > 1) title='Copy path @(sel.count) items selected' mode="multiple" cmd=command.copy( path.separator( sel( true, "\n" ) ) ) sep="both" )

	item( title="Copier le chemin" cmd=command.copy( path.separator( sel.path ) ) sep="both" )

// ╚ Copier le chemin ╝

// ╔ PowerShell ╗

	remove( find="Ouvrir la fenêtre PowerShell ici" )

	item( title="Ouvrir la fenêtre PowerShell ici" cmd="C:/Users/nemo6/Dropbox/E lab2/a.code/vbs/powershell.vbs" args='"@sel.path"' vis=@key.shift() where=( window.is_desktop and sel.type==2 ) Position=9 )

	item( title="Ouvrir la fenêtre PowerShell ici" cmd="C:/Users/nemo6/Dropbox/E lab2/a.code/vbs/powershell.vbs" args='"@sel.path"' vis=@key.shift() where=( !window.is_desktop and sel.type==3 ) Position=11 )

// ╚ PowerShell ╝

// ╔ wsl2 ╗

	remove( find="Ouvrir l'interpréteur de commandes Linux ici" )

	// item( title="Ouvrir l'interpréteur de commandes Linux ici" cmd="wsl" args='--cd "@sel.path"' vis=@key.shift() )

	item( title="Ouvrir l'interpréteur de commandes Linux ici" cmd="C:/Users/nemo6/Dropbox/E lab2/a.code/vbs/wsl2.vbs" args='"@sel.path"' vis=@key.shift() )

// ╚ wsl2 ╝

// ╔ Terminal ╗

	item( title="Ouvrir avec vscode" cmd="C:/Users/nemo6/AppData/Local/Programs/Microsoft VS Code/Code.exe" args='"@sel.path"' Parent="Terminal" )

// ╚ Terminal ╝

// ╔ Hide file ╗

	item(
		vis=@(sel.count > 0)
		title='Hide file'
		mode="multiple"
		cmd args='/c node "C:/Users/nemo6/Dropbox/E lab2/a.code/command/hide_file/hide_file.js" @( path.separator( sel( true, " " ) ) )'
		window=hidden
		sep="both"
		Parent="Terminal"
	)

// ╚ Hide file ╝

// item( title="Open with Sublime Text (2)" cmd="C:/Program Files/Sublime Text 4/sublime_text.exe" args=@sel.path Position=3 sep="both" type="file" )
