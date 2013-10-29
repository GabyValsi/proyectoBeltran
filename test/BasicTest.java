import org.junit.*;
import java.util.*;
import play.test.*;
import models.*;

public class BasicTest extends UnitTest {

    @Test
    public void aVeryImportantThingToTest() {
        
        new Producto("Chicles", 10, 7.0, 10.5, true).save();
        new Producto("soda", 9, 6.0, 10.5, true).save();
        
    }

}
