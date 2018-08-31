echo "login: $(cut -d " " -f 9 login-20170102-anon.csv.txt | grep login-page | wc -l)"
echo "re-login: $(cut -d " " -f 9 login-20170102-anon.csv.txt | grep RE-LOGIN | wc -l)"
echo "timeout: $(cut -d " " -f 9 login-20170102-anon.csv.txt | grep TIMEOUT | wc -l)"
echo "logout:  $(cut -d " " -f 9 login-20170102-anon.csv.txt | grep logout-page | wc -l)"