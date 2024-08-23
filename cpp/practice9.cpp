#include <iostream>
using namespace std;
int main()
{
int n;
int a=1 ,b=1;

cout <<"enter n value:";
cin >>n;
cout <<a<<'\t'<<b<<'\t';
for (int i=3;i<=n;i++){
	int c=a+b;
	cout << c<<'\t';
	a=b;
	b=c;
}
}