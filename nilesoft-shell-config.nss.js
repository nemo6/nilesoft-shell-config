settings
{
	exclude.where = !process.is_explorer
}

import "imports/theme.nss"

remove( find="Regrouper par")
remove( find="Ouvrir avec")
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

modify( find="Éditer avec" Visibility="Normal" )

modify( find="7-zip" vis=@key.shift() )

modify( find="Envoyer vers" Position=7 sep="both" )

// item( title="Ouvrir la fenêtre PowerShell ici" cmd="C:/Users/nemo6/Dropbox/E lab2/a.code/powershell.vbs" args=@sel.path vis=@key.shift() Position=9 )

item( vis=@(sel.count > 1) title='Copy path (@sel.count) items selected' mode="multiple" cmd=command.copy( path.separator( sel( true, "\n" ) ) ) sep="both" )

// double quote dosen't work with variable

item( title="Copier le chemin" cmd=command.copy( path.separator( sel.path ) ) sep="both" )

item( title="Open with Sublime Text (2)" cmd="C:/Program Files/Sublime Text 4/sublime_text.exe" args=@sel.path Position=3 sep="both" type="file" )

modify( find= "Open with Sublime Text" Position=3 sep="both" )

// $has_admin=key.shift()

remove( find="Ouvrir la fenêtre PowerShell ici" type="dir" )

remove( find="Ouvrir l'interpréteur de commandes Linux ici" type="dir" )
