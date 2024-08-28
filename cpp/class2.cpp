#include <iostream>
using namespace std;

class B2 {
private:
    int bcode;
    char bname[20];
    int innings, notout, runs,batavg;
  
    void calcavg();
public:
    
    void readdata() {
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
       calcavg();
    }
  
    void displaydata() {
        cout << "batsman code: " << bcode << endl;
        cout << "batsman Name: " << bname << endl;
        cout << "batsman innings: " << innings << endl;
        cout << "batsman notout: " << notout << endl;
        cout << "batsman runs: " << runs << endl;
        cout << "batsman avg.: " << batavg << endl;
    }
}; 
void B2 :: calcavg(){
        batavg =runs/(innings-notout);
 } ;
 
int main() {
    B2 b1;
    b1.readdata();
    b1.displaydata();

    return 0;
}
