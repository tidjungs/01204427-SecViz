echo "dual: $(cut -d " " -f 6-7 login-20170102-anon.csv.txt | grep -v "-" | wc -l)"
echo "ipv6: $(cut -d " " -f 6-7 login-20170102-anon.csv.txt | grep "^-" | wc -l)"
echo "ipv4: $(cut -d " " -f 6-7 login-20170102-anon.csv.txt | grep "..-" | wc -l)"