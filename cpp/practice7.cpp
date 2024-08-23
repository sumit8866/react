#include<iostream>
using namespace std;

int main(){
int i,n,r,sum =0;

cout <<"enter n number:";
cin >>n;
for (i=1;i<=(n-1);i++){
	
	r= n % i;
	if(r == 0){
		
		sum += i;
	}
}

if (sum == n){
	cout <<"this is perfact number";
}
else{
	cout << "this is not perfact number";
}

}

	