public class Sprite {

    private String name;
    double center_x, center_y;

    public Sprite ()
    {
        name = "J??";
        center_x = 0;
        center_y = 0;
    }

    public Sprite(String n, double x, double y)
    {
        name = n;
        center_x = x;
        center_y = y;
    }

    public void getName() 
    {
        System.out.println("Her First name is " + "" + name);
    }

    public void getMiddleName() 
    {
        System.out.println("Her Middle name is " + "" + name);
    }

    public void getLastName() 
    {
        System.out.println("Her Last name is " + "" + name);
    }

    public void setName(String new_name)
    {
        name = new_name;
    }

    public void display()
    {

    }

    public void update()
    {

    }
} 