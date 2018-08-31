for ((i=201; i<=212; i++))
do
  echo "$i: $(cut -d " " -f 8 login-20170102-anon.csv.txt | grep ::ffff:158.108.218.$i | wc -l)"
done
