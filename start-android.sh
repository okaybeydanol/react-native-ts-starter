#!/bin/zsh
expect -c "
spawn react-native start --reset-cache
send \"a\"
interact
"
