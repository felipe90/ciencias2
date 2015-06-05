/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


import com.sun.java.swing.plaf.windows.WindowsLookAndFeel;
import java.awt.BorderLayout;
import java.awt.Container;
import java.awt.Dimension;
import java.awt.GridBagConstraints;
import java.awt.GridBagLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.WindowAdapter;
import java.awt.event.WindowEvent;
import javax.swing.JButton;
import javax.swing.JComboBox;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JScrollPane;
import javax.swing.JTable;
import javax.swing.JTextArea;
import javax.swing.JTextField;
import javax.swing.SwingUtilities;
import javax.swing.UIManager;
import javax.swing.table.DefaultTableModel;

/**
 *
 * @author Dani
 */
public class Ventana extends JFrame {
    CanvasGrafo canvasGrafo1;
    CanvasGrafo canvasGrafo2;
    Container contentPane;
    JButton jbDibujarGrafo1;
    JButton jbDibujarGrafo2;
    JButton jbCalcularIsomorfismo;
    String[] columnNames={"1","2"};
    Object[][] data = {
            {"0", "0"},
            {"0", "0"},
        };
    JLabel jlSpace1;
    JLabel jlSpace2;
    JLabel jlSpace3;
    JLabel jlGrafo;
    JLabel jlMatriz;
    JLabel jlResultado;
    
    
    
    DefaultTableModel dtmTablaMatrizAdyacencia1;
    DefaultTableModel dtmTablaMatrizAdyacencia2;
    
    JTable tablaMatrizAdyacencia1;
    JTable tablaMatrizAdyacencia2;
    JTextArea jtaResultado;
    
    public Ventana(){
        super("ISOMORFISMO");
        
        canvasGrafo1 = new CanvasGrafo(this,true);
        canvasGrafo2 = new CanvasGrafo(this,false);
        
        ButtonHandler objButtonHandler = new ButtonHandler(this,canvasGrafo1,canvasGrafo2);
        
        dtmTablaMatrizAdyacencia1 = new DefaultTableModel(data, columnNames);
        tablaMatrizAdyacencia1 = new JTable(data, columnNames);
        JScrollPane scrollPane1 = new JScrollPane(tablaMatrizAdyacencia1);
        
        dtmTablaMatrizAdyacencia2 = new DefaultTableModel(data, columnNames);
        tablaMatrizAdyacencia2 = new JTable(data, columnNames);
        JScrollPane scrollPane2 = new JScrollPane(tablaMatrizAdyacencia2);
        
        tablaMatrizAdyacencia1.setPreferredScrollableViewportSize(new Dimension(300, 260));
        tablaMatrizAdyacencia2.setPreferredScrollableViewportSize(new Dimension(300, 260));
          
        jlSpace1=new JLabel("           ");
        jlSpace2=new JLabel("           ");
        jlSpace3=new JLabel("           ");
        jlResultado=new JLabel("Resultado: ");
        
        jtaResultado=new JTextArea(8, 80);
        JScrollPane scrollPane3 = new JScrollPane(jtaResultado);
        
        jbDibujarGrafo1 = new JButton("Dibujar Grafo 1");
        jbDibujarGrafo1.addActionListener(objButtonHandler);
        jbDibujarGrafo2 = new JButton("Dibujar Grafo 2");
        jbDibujarGrafo2.addActionListener(objButtonHandler);
        jbCalcularIsomorfismo = new JButton("Calcular Isomorfismo");
        jbCalcularIsomorfismo.addActionListener(objButtonHandler);
        
        JPanel panelCanvas = new JPanel();
        JPanel buttonPanel = new JPanel();
        JPanel panelResultados = new JPanel();
        
        GridBagLayout gridbag = new GridBagLayout();
        buttonPanel.setLayout(gridbag);
        GridBagConstraints gbc = new GridBagConstraints();
        buttonPanel.add(jbDibujarGrafo1);
        gbc.gridx = 0;
        gbc.gridy = 0;
        gridbag.setConstraints(jbDibujarGrafo1, gbc);
        buttonPanel.add(jbDibujarGrafo2);
        gbc.gridx = 3;
        gbc.gridy = 0;
        gridbag.setConstraints(jbDibujarGrafo2, gbc);   
        buttonPanel.add(jbCalcularIsomorfismo);
        gbc.gridx = 5;
        gbc.gridy = 0;
        gridbag.setConstraints(jbCalcularIsomorfismo, gbc);  
        
        GridBagLayout gridbagCanvas = new GridBagLayout();
        panelCanvas.setLayout(gridbagCanvas);
        GridBagConstraints gbcCanvas = new GridBagConstraints();
        panelCanvas.add(canvasGrafo1);
        gbcCanvas.gridx = 0;
        gbcCanvas.gridy = 0;
        gridbagCanvas.setConstraints(canvasGrafo1, gbcCanvas);
        panelCanvas.add(scrollPane1);
        gbcCanvas.gridx = 1;
        gbcCanvas.gridy = 0;
        gridbagCanvas.setConstraints(scrollPane1, gbcCanvas);
        panelCanvas.add(canvasGrafo2);
        gbcCanvas.gridx = 0;
        gbcCanvas.gridy = 1;
        gridbagCanvas.setConstraints(canvasGrafo2, gbcCanvas);
        panelCanvas.add(scrollPane2);
        gbcCanvas.gridx = 1;
        gbcCanvas.gridy = 1;
        gridbagCanvas.setConstraints(scrollPane2, gbcCanvas);
        
        GridBagLayout gridbagResultados = new GridBagLayout();
        panelResultados.setLayout(gridbagResultados);
        GridBagConstraints gbcResultados = new GridBagConstraints();
        panelResultados.add(scrollPane3);
        gbcResultados .gridx = 0;
        gbcResultados .gridy = 0;
        gridbagResultados.setConstraints(scrollPane3, gbcCanvas);
        
        contentPane = getContentPane();

        contentPane.add(buttonPanel, BorderLayout.NORTH);
        contentPane.add(panelCanvas, BorderLayout.CENTER);
        contentPane.add(panelResultados, BorderLayout.SOUTH);
        
        try {
          UIManager.setLookAndFeel(new WindowsLookAndFeel());
          SwingUtilities.updateComponentTreeUI(
            Ventana.this);
        } catch (Exception ex) {
          System.out.println(ex);
        }
        
        setSize(700, 880);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setVisible(true);
    }
    
    public static void main(String[] args) {
    JFrame frame = new Ventana();
    
    frame.addWindowListener(new WindowAdapter() {
          public void windowClosing(WindowEvent e) {
            System.exit(0);
          }
        }
    );
    frame.setVisible(true);
  }
    public void addFileRowTable(int column){
        Object[] newRow=new Object[column];
        String[] newColumn = new String[column];
        for(int i=0;i<column;i++){
            newRow[i]="0";
            newColumn[i]="0";
        }
        
        dtmTablaMatrizAdyacencia1.addRow(newRow);
        dtmTablaMatrizAdyacencia1.addColumn(column, newColumn);
        tablaMatrizAdyacencia1.setModel(dtmTablaMatrizAdyacencia1);
        
        dtmTablaMatrizAdyacencia2.addRow(newRow);
        dtmTablaMatrizAdyacencia2.addColumn(column, newColumn);
        tablaMatrizAdyacencia2.setModel(dtmTablaMatrizAdyacencia2);
        for(int i=0;i<column;i++){
            tablaMatrizAdyacencia1.setValueAt("x", i, i);
            tablaMatrizAdyacencia2.setValueAt("x", i, i);
        }
    }
    
}


