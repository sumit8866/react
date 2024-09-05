#include <iostream>
using namespace std;

class Student {
public:
    int admno;
    char sname[20];
    float eng, math, science, total;
  
  void ctotal() {
        total = eng + math + science;
        cout<< total;
  }
    
    void Takedata() {
       cout << "admno:";
       cin >> admno;
        cout << "sname:";
       cin >> sname;
        cout << "eng:";
       cin >> eng;
        cout << "math:";
       cin >> math;   
        cout << "science:";
       cin >> science; 
        ctotal();  
    }
};
 class Student2 : public Student{
public:
 
    void Showdata() {
        Takedata();
        cout << "Admission Number: " << admno << endl;
        cout << "Student Name: " << sname << endl;
        cout << "English Marks: " << eng << endl;
        cout << "Math Marks: " << math << endl;
        cout << "Science Marks: " << science << endl;
        cout << "Total Marks: " << total << endl;
    }
};
int main() {
    Student2 student1;
    student1.Showdata();
    

    return 0;
}
