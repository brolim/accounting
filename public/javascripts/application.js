INPUT_TYPE = "INPUT"
OUTPUT_TYPE = "OUTPUT"

BLUE = "#aad6ea";
PINK = "#f49ee3";
GREEN = "#82cf89";

NO_EDGES = "there is no edge";

function Edge(value){
	this.value = value;
};

function Node(name, edges_in, edges_out, color, level){
	this.name = name;
	this.edges_in = edges_in;
	this.edges_out = edges_out;
	this.level = level;
	this.color = color;
};

function Graph(name){

	this.name = name;

    var node = [];
    var edge1 = new Edge(10);
    var edge2 = new Edge(20);
    
    transactions1 = [];
    transactions1.push(edge1);
    transactions1.push(edge1);
    transactions1.push(edge1);
    transactions1.push(edge1);
    
    transactions2 = [];
    transactions2.push(edge2);
    transactions2.push(edge2);
    
    
    
    node.push(new Node("nó 0", NO_EDGES, transactions1, BLUE, 0));
    node.push(new Node("nó 0.0", transactions1[0], NO_EDGES, GREEN, 1));
    node.push(new Node("nó 0.1", transactions1[1], transactions2, PINK, 1));
    node.push(new Node("nó 0.2", transactions1[2], NO_EDGES, BLUE, 1));
    node.push(new Node("nó 0.3", transactions1[3], NO_EDGES, GREEN, 1));
    
    node.push(new Node("nó 0.2.0", transactions2[0], NO_EDGES, BLUE, 2));
    node.push(new Node("nó 0.2.1", transactions2[1], NO_EDGES, GREEN, 2));
    
    
	this.node = node;
	
	this.current_node_level = 0;
};

Graph.prototype = {
	some_position: function(){
	}
};

function draw_horizontal_arrow(paper, x, y, size, text){

    paper.text(x+size-30, y-7, text);

    var str = "M"+x+" "+y+"L";
    x += size-5;
    str += x+" "+y+"L";
    y += 5;
    str += x+" "+y+"L";
    x += 5;
    y -= 5;
    str += x+" "+y+"L";
    x -= 5;
    y -= 5;
    str += x+" "+y+"L";
    y += 5;
    str += x+" "+y;
    
    paper.path(str);
};

function draw_arrow_separator(paper, x, y){
    var str = "M"+x+" "+y+"L";
    y += 50;
    str += x+" "+y;
    
    paper.path(str);
}

function draw_arrows(paper, x, y, edges){
    
    var number_of_arrows = edges.length;
    
    if(number_of_arrows == 1){
        draw_horizontal_arrow(paper, x, y+20, 40, edges[0].value);
    }
    else{
        //y-axis adjustment
        y += 20;
        
        //separators
        x = x + 15;
        var separator_y = y;
        for(var i=0; i<number_of_arrows-1; i++){
            draw_arrow_separator(paper, x, separator_y);
            separator_y += 50;
        }

        //arrows   
        draw_horizontal_arrow(paper, x-5, y, 45, edges[0].value);
        for(var i=0; i<number_of_arrows-1; i++){
            y += 50;
            draw_horizontal_arrow(paper, x, y, 40, edges[i+1].value);
        }
    }

}

function draw_node(paper, node ,x, y){
    var ellipse = paper.ellipse(x, y, 40, 20);
    ellipse.attr("fill", node.color);
    paper.text(x, y, node.name);
};

function draw_nodes(paper, nodes, node_level){

    var edge_x = 95 + node_level*130;
    var edge_y = 30;
    
    var node_x = 65 + node_level*130;
    var node_y = 50;

    for(var i=0; i<nodes.length; i++){
        //draw output arrows only if exists
        if(nodes[i].edges_out != NO_EDGES){
            draw_arrows(paper, edge_x, edge_y, nodes[i].edges_out);
        }
        draw_node(paper, nodes[i], node_x, node_y);
        
        node_y += 50;
    }
};


function draw_graph(nodes){

    paper = Raphael(document.getElementById("graph"), 800, 400);
    
    var graph = new Graph("rolim");
    
    var node_x = 50;
    var node_y = 50;
    
    var edge_x = 95;
    var edge_y = 30;
    var str = "";

    var level_nodes = [];

    for(var i=0; i<graph.node.length; i++){

        if(graph.current_node_level != graph.node[i].level){
            alert(level_nodes.length);
            draw_nodes(paper, level_nodes, graph.current_node_level);
            graph.current_node_level++;
            level_nodes = [];
        }

        level_nodes.push(graph.node[i]);
    }
    alert(level_nodes.length);
    draw_nodes(paper, level_nodes, graph.current_node_level);
}
