package models;
 import javax.persistence.Entity;
import play.db.jpa.Model;


@Entity

public class Producto extends Model{

    public String nombre;
    public Integer cantidad;
    public Double precio;
    public Double importe;
    public boolean selected;

    public Producto(String nombre, Integer cantidad, Double precio, Double importe, boolean selected) {
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.precio = precio;
        this.importe = importe;
        this.selected = selected;
    }
    
    


}