#include<iostream>
using namespace std;
   int bcode;
    char bname[20];
    float innings, notout, runs;
    float batavg;
class base1{
  public:
    
    void set1(){
    cout << "bcode:";
       cin >> bcode;
        cout << "bname:";
       cin >> bname;
        cout << "innings:";
       cin >> innings;
        cout << "notout:";
       cin >> notout;   
        cout << "runs:";
       cin >> runs;
    }
};
class derive: public base1{
   public:
   void set2(){
      
        batavg =runs/(innings-notout);
 
   }
};  
class derive2: public derive
{
    public:
   void display(){
     cout << "batsman code: " << bcode << endl;
        cout << "batsman Name: " << bname << endl;
        cout << "batsman innings: " << innings << endl;
        cout << "batsman notout: " << notout << endl;
        cout << "batsman runs: " << runs << endl;
        cout << "batsman avg.: " << batavg << endl;
   }
};    
int main()
{
    class derive2 a;
    a.set1();
    a.set2();
    a.display();
return 0;
}