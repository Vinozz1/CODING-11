public class Main {

    public static void main(String[] args) {
        Sprite player1 = new Sprite("N",50, 30);
        Sprite player2 = new Sprite("J", 100, 300);
        Sprite player3 = new Sprite("C", 15, 60);

        System.out.println(player1.center_x + "," + player1.center_y);
        System.out.println(player2.center_x+ ","+ player2.center_y);
        System.out.println(player3.center_x+ ","+ player3.center_y);

        player1.getMiddleName();
        player2.getName();
        player3.getLastName();

        player1.center_x = 200;
        player1.center_y = 300;

        System.out.println(player1.center_x + "" + player1.center_y);

        player2.setName("The spesial one");
        player2.getName();

        Sprite player4 = new Sprite();
        player4.getName();

        System.out.println(player4.center_x  + "," + player4.center_y);
    }
}
