### EXPORT ###
set fish_greeting                                 # Supresses fish's intro message
#set TERM "xterm-256color"                         # Sets the terminal type


### FUNCTIONS ###

# Functions needed for !! and !$
function __history_previous_command
  switch (commandline -t)
  case "!"
    commandline -t $history[1]; commandline -f repaint
  case "*"
    commandline -i !
  end
end

function __history_previous_command_arguments
  switch (commandline -t)
  case "!"
    commandline -t ""
    commandline -f history-token-search-backward
  case "*"
    commandline -i '$'
  end
end

# The bindings for !! and !$
if [ "$fish_key_bindings" = "fish_vi_key_bindings" ];
  bind -Minsert ! __history_previous_command
  bind -Minsert '$' __history_previous_command_arguments
else
  bind ! __history_previous_command
  bind '$' __history_previous_command_arguments
end

# Function for creating a backup file
# ex: backup file.txt
# result: copies file as file.txt.bak
function backup --argument filename
    cp $filename $filename.bak
end

### END OF FUNCTIONS ###


### ALIASES ###
# navigation
alias ..='cd ..'
alias ...='cd ../..'
alias .3='cd ../../..'
alias .4='cd ../../../..'
alias .5='cd ../../../../..'

# Changing "ls" to "eza"
alias ls='eza -al --color=always --group-directories-first' # my preferred listing
alias la='eza -a --color=always --group-directories-first'  # all files and dirs
alias ll='eza -l --color=always --group-directories-first'  # long format
alias lt='eza -aT --color=always --group-directories-first' # tree listing
alias l.='eza -a | egrep "^\."'

# pacman and yay
alias pacupdate='sudo pacman -Syu'                 		 # update only standard pkgs
alias pacsyyu='sudo pacman -Syyu'               		 # Refresh pkglist & update standard pkgs
alias parsua='paru -Sua --noconfirm'            		 # update only AUR pkgs (paru)
alias yayupdate='yay -Syu --noconfirm'            		 # update standard pkgs and AUR pkgs (paru)
alias unlock='sudo rm /var/lib/pacman/db.lck'   		 # remove pacman lock
alias cleanup='sudo pacman -Rns (pacman -Qtdq)' 		 # remove orphaned packages (DANGEROUS!)
alias update='sudo pacman -Syyu --noconfirm && yay -Syu --noconfirm'  #full update
alias pacins='sudo pacman -S'					         #install pkg
alias pacuni='sudo pacman -Rns'				     	     #unistall pkg

# internet
alias internet='nmtui'

### PFETCH AT START
neofetch

### SETTING THE STARSHIP PROMPT ###
starship init fish | source
