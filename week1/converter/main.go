package main

import (
	"encoding/csv"
	"encoding/json"
	"fmt"
	"io"
	"io/ioutil"
	"log"
	"strconv"
	"strings"
)

// JSONData is data format for rendering graph
type JSONData struct {
	Nodes []Node `json:"nodes"`
	Edges []Edge `json:"edges"`
}

// Node is graph node format
type Node struct {
	Color      string  `json:"color"`
	Label      string  `json:"label"`
	Attributes Attr    `json:"attributes"`
	X          float64 `json:"x"`
	Y          float64 `json:"y"`
	ID         string  `json:"id"`
	Size       float64 `json:"size"`
}

// Edge is graph edge format
type Edge struct {
	SourceID   string `json:"sourceID"`
	Attributes Attr   `json:"attributes"`
	TargetID   string `json:"targetID"`
	Size       int    `json:"size"`
}

// Attr is ...
type Attr struct {
}

func failOnError(err error) {
	if err != nil {
		log.Fatal(err)
	}
}

func main() {
	data, err := ioutil.ReadFile("./internal_data.csv")
	failOnError(err)
	// fmt.Println(string(data))
	r := csv.NewReader(strings.NewReader(string(data)))

	jsonData := JSONData{
		Nodes: []Node{},
		Edges: []Edge{},
	}

	for {
		record, err := r.Read()
		if err == io.EOF {
			break
		}
		failOnError(err)

		asn := record[1]
		sourceAsn := record[0]
		size, _ := strconv.ParseFloat(record[4], 64)

		node := Node{
			Label:      asn,
			Attributes: Attr{},
			ID:         asn,
			Size:       size,
		}

		edge := Edge{
			SourceID:   sourceAsn,
			Attributes: Attr{},
			TargetID:   asn,
			Size:       1,
		}

		jsonData.Nodes = append(jsonData.Nodes, node)
		jsonData.Edges = append(jsonData.Edges, edge)
	}

	jsonDataBytes, _ := json.Marshal(jsonData)
	fmt.Println(string(jsonDataBytes))
}
